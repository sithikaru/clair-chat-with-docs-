import MaxWidthWrapper from "@/components/maxWidthWrapper"
import { Children } from "react"
export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-12 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Clair is now public!
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl md:text-6xl font-bold lg:text-7xl">
    Chat with your <span className="text-blue-600">Documents</span>
      </h1>
    </MaxWidthWrapper>
  )
}
