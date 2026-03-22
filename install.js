#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const skillsSource = path.join(__dirname, 'skills');
const skillsDest = path.join(os.homedir(), '.claude', 'skills');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const skills = fs.readdirSync(skillsSource, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name);

for (const skill of skills) {
  const src = path.join(skillsSource, skill);
  const dest = path.join(skillsDest, skill);
  copyDir(src, dest);
  console.log(`✓ Installed skill: ${skill}`);
}

console.log(`\n${skills.length} legal skills installed to ~/.claude/skills/`);
console.log('Skills: ' + skills.join(', '));
console.log('\nRestart Claude Code to activate the new skills.');
