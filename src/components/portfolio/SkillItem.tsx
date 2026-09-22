import type { Skill } from "@/data/portfolio";

export function SkillItem({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <li className="flex w-28 flex-col items-center gap-3 transition-transform duration-200 hover:-translate-y-1">
      <Icon aria-hidden="true" size={44} style={{ color: skill.color }} />
      <span className="text-center text-sm text-muted-foreground">{skill.name}</span>
    </li>
  );
}
