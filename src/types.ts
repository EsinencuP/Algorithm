/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CourseLevel = "beginner" | "middle" | "senior";

export interface TechStackItem {
  name: string;
  iconName: string; // Lucide icon reference or specific label
  description: string;
}

export interface SyllabusModule {
  id: string;
  title: string;
  phase: string;
  description: string;
  baseHours: number; // Base hours required to master this module
  hoursTheory: number;
  hoursPractice: number;
  hoursHomework: number;
  hoursGroupWork: number;
  detailedLessons: string[];
}

export interface LevelInfo {
  level: CourseLevel;
  title: string;
  subTitle: string;
  description: string;
  salaryLevel: string;
  termDuration: string;
  techStack: TechStackItem[];
  highlightColor: string; // HSL saturation or dynamic theme hue offset
  featuredProject: {
    name: string;
    description: string;
    specs: string[];
  };
}
