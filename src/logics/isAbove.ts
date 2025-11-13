function isAbove(textBox, height) {
    // console.log(textBox.top,Number(height.split("px")[0]))
    return (
        Number(height.split("px")[0]) >= 135
    )
}
export default isAbove;