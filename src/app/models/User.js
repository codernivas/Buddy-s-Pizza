import { model, models, Schema } from "mongoose"

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 5) {
          new Error("password must be atleat 5 char")
        }

      },
    },
  },
  { timestamps: true }
)

// UserSchema.pre("save", (next, ...rest) => {
//   console.log(rest)
//   next()
// })
UserSchema.post('validate',function(){
    console.log({arguments})
})

export const User = models?.User || model("User", UserSchema)
