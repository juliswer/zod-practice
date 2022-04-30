import { z } from "zod";

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

const UserSchema = z.object({
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
console.log(res);