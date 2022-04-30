import { z } from "zod";

const userSchema = z.object({
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
console.log(res);
