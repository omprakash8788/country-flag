import { expect, test } from "@jest/globals";
import { getFlagByCode } from "./getFlagByCode";
import flags from "../data/flags.json";

test("returns correct flag for country code", () => {
  expect(getFlagByCode("us")).toBe(flags.US); // lowercase input
  expect(getFlagByCode("IN")).toBe(flags.IN); // uppercase input
});

test("returns null for unknown country code", () => {
  expect(getFlagByCode("unknown")).toBeNull();
});
