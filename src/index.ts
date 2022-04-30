import { z } from "zod";

// ! First example

/* const userSchema = z.object({
    email: z.string().email(),
    fullname: z.string(),
    phone: z.number()
})

const user = { 
    email: "anfgag@agd.com",
    fullname: "anfgag",
    phone: 123
}

const res = userSchema.parse(user);
console.log(res); */

// ! Second example

/* const UserSchema = z.object({
  email: z.string().email(),
  fullname: z.string(),
  phone: z.number(),
});

type UserType = z.infer<typeof UserSchema>

const UserInput: UserType = {
    email: "adgadg@gad.com",
    fullname: "adgadg",
    phone: 123
}

const res = UserSchema.parse(UserInput);
console.log(res); */

// ! Third example

/* const UserSchema = z.object({
  email: z.string().email(),
  fullname: z.string(),
  phone: z.number(),
});

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
});

const citizenSchema = UserSchema.merge(addressSchema);

type CitizenType = z.infer<typeof citizenSchema>

const res = addressSchema.parse({
  street: "asdasd",
  city: "asdasd",
});
console.log(res);

const citizen : CitizenType = {
    city: "bsas",
    email: "jasfga@gmail.com",
    phone: 123,
    street: "asdasd",
    fullname: "jon doe"
}

const rescitizen = citizenSchema.parse(citizen);
console.log(rescitizen); */

// ! Fourth example

/* const stringSchema = z.string();

const result = stringSchema.safeParse("30");
console.log(result) */

// ! Fifth example

/* const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

// const numbersArraySchema = z.array(z.string());
const usersSchema = z.array(UserSchema);

// type numbersArrayType = z.infer<typeof numbersArraySchema>;

const res = usersSchema.parse([
  {
    name: "jon doe",
    age: 30,
  },
  {
    name: "jon doe2",
    age: 31,
  },
]);
console.log(res);

const s1 = z.string().optional().array();
const s2 = z.string().array().optional();

type s1Type = z.infer<typeof s1>
type s2Types = z.infer<typeof s2>

const s1res = s1.parse(["1", undefined])
console.log(s1res) */