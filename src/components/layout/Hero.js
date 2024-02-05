import Image from "next/image"
import Right from "../icons/Right"
export default function Hero() {
  return (
      <section className="grid grid-cols-2 mt-4">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everything <br />
            is better <br /> with a&nbsp;{" "}
            <span className="text-primary"> Pizzaaaa</span>
          </h1>
          <p className="my-4 text-gray-500">
            Taste is the missing piece that makes every day complete, a simple
            yet delicious joy in life
          </p>
          <div className="flex gap-4  text-sm">
            <button className="flex justify-center bg-primary items-center uppercase flex gap-2 text-white px-4 py-2 rounded-full">
              Order now
              <Right />
            </button>
            <button className="flex border-0 items-center gap-2 py-2 text-gray-600 font-semibold">
              Learn more <Right />
            </button>
          </div>
        </div>

        <div className=" relative">
          <Image
            src={"/pizza.png"}
            alt={"pizza"}
            fill           
             objectFit={"contain"}
          />
        </div>
      </section>
  )
}
