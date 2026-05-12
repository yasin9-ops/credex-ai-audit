import { generateAudit } from "../lib/auditEngine";

describe("Audit Engine", () => {
  test("ChatGPT optimization", () => {
    const result = generateAudit("ChatGPT", "Team", 2);

    expect(result.savings).toBe(40);
  });

  test("Cursor optimization", () => {
    const result = generateAudit("Cursor", "Business", 1);

    expect(result.savings).toBe(20);
  });
});