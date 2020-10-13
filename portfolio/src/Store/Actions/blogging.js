export function blogging() {

    fetch("https://api.covid19api.com/")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            return {
                type: "BLOG",
                blogging: { blogs: "apis" }
            }
        })
}