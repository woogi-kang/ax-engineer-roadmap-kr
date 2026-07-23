import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'GOVERNANCE.md',
  'roadmap/role-model.md',
  'roadmap/competency-map.md',
  'roadmap/proficiency-levels.md',
  'delivery-lifecycle/README.md',
  'organization-maturity/README.md',
  'learning-paths/12-week-practice.md',
  'case-studies/beauty-d2c-voc/README.md',
  'research/ax-engineer-role-review.md',
  'research/source-policy.md'
];

for (let index = 1; index <= 8; index += 1) {
  const prefix = String(index).padStart(2, '0');
  const match = fs
    .readdirSync(path.join(root, 'delivery-lifecycle'))
    .find((name) => name.startsWith(`${prefix}-`) && name.endsWith('.md'));

  if (!match) {
    requiredFiles.push(`delivery-lifecycle/${prefix}-*.md`);
  }
}

const failures = [];
const retiredFiles = [
  'delivery-lifecycle/08-productization-and-scale.md',
  'research/existing-roadmaps-review.md'
];

for (const file of requiredFiles) {
  if (file.includes('*') || !fs.existsSync(path.join(root, file))) {
    failures.push(`필수 파일 누락: ${file}`);
  }
}

for (const file of retiredFiles) {
  if (fs.existsSync(path.join(root, file))) {
    failures.push(`이전 범위 파일이 남아 있음: ${file}`);
  }
}

const lifecycleFiles = fs
  .readdirSync(path.join(root, 'delivery-lifecycle'))
  .filter((name) => /^\d{2}-.*\.md$/.test(name));

const requiredHeadings = ['## 목적', '## 주요 작업', '## 산출물', '## 통과 기준'];

for (const file of lifecycleFiles) {
  const content = fs.readFileSync(path.join(root, 'delivery-lifecycle', file), 'utf8');
  for (const heading of requiredHeadings) {
    if (!content.includes(heading)) {
      failures.push(`${file}: ${heading} 누락`);
    }
  }
}

const blockedTerms = [
  '\uc640\uc774\uc5b4\ud2b8',
  '\ub354\ud30c\uc6b4\ub354\uc988',
  ['INTERVIEW', 'NOTE'].join('_'),
  ['/', 'Users', '/', 'woogi'].join(''),
  ['career', '-', 'docs', '/'].join('')
];

function walk(directory) {
  const result = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      continue;
    }
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      result.push(...walk(target));
    } else {
      result.push(target);
    }
  }
  return result;
}

for (const file of walk(root)) {
  const content = fs.readFileSync(file, 'utf8');
  for (const term of blockedTerms) {
    if (content.includes(term)) {
      failures.push(`${path.relative(root, file)}: 공개 금지 문자열 발견`);
    }
  }
}

if (failures.length > 0) {
  console.error(`로드맵 검사 실패 ${failures.length}건`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`로드맵 구조 통과: 생애주기 ${lifecycleFiles.length}단계`);
