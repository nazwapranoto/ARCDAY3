
const readline = require('readline');

// Fungsi callback
function myCallback(result) {
    console.log('Hasil dari callback'. $,{result});
}

// Fungsi async yang menggunakan await
async function myAsyncFunction() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    return "Ini hasil dari async function";
}

// Fungsi utama
async function main() {
    console.log("Program CLI dengan callback dan async await");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Masukkan teks: ", async (userInput) => {
        // Panggil fungsi async
        const result = await myAsyncFunction();
        console.log(result);

        // Panggil fungsi callback
        myCallback(userInput);

        rl.close();
    });
}

// Jalankan program
main();