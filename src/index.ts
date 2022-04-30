import { z } from "zod";

const nameSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean();
const undefinedSchema = z.undefined();
const nullSchema = z.null();

const name = 100;

const res = numberSchema.parse(name);
console.log(res);
