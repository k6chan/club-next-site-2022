import { useRouter } from "next/dist/client/router"
import React from "react"


const MyImage = React.forwardRef(({ children, src, ...otherProps }, ref) => {
  const router = useRouter()
  return (
      <img src={router.basePath + "/" + src}{...otherProps} ref={ref}>{children}</img>
  )
})

MyImage.displayName = "MyImage"

export default MyImage
