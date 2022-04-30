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

const UserSchema = z.object({
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
console.log(rescitizen);