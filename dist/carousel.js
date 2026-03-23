const fetchUser = (b) => {
    return new Promise((resolve, reject) => {
        const ok = true;
        if (ok === b) {
            resolve("okay");
        }
        else {
            reject("failed");
        }
    });
};
async function main() {
    try {
        let blob = false;
        const user = await fetchUser(blob);
        console.log(user);
    }
    catch (error) {
        console.error(error);
    }
}
main();
