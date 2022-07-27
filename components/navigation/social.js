import MyImage from "../myimage"

export default function Social({data, height=30, gap=2, ...otherProps}) {
    let {className, ...otherPropsWithoutClassName} = otherProps
    let gap_spacer = "gap-" + gap
    let classes = "d-inline-flex flex-wrap justify-content-center " + gap_spacer
    return (
        <div className={classes + " " + className} {...otherPropsWithoutClassName}>
            {data["socials"].map((social, index) => (
                <span key={index}>
                <a href={social["url"]}>
                    <MyImage src={social["icon"]} alt={social["name"]} height={height}/>
                </a>
                </span>
            ))}
        </div>
    )
}