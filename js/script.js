// 2-masala
let markMass = Number(prompt("Markning vaznini kiritng (kg) :"));
let markHeight = Number(prompt("Markning uzunligini kiritng (sm) :"));
let jonMass = Number(prompt("Jonning vaznini kiritng (kg) :"));
let jonHeight = Number(prompt("Jonning uzunligini kiritng (sm) :"));

markBMI =(Math.round(markMass / (markHeight / 100)** 2));
jonBMI = (Math.round(jonMass / (jonHeight / 100)** 2));

console.log(`Mark BMI = ${markBMI}`);
console.log(`Jon BMI = ${jonBMI}`);

if (markBMI > jonBMI) {
    console.log(`
    Markning vazni ${markMass} boyi ${markHeight} BMI ${markBMI} bu Jonnikidan katta
    Jonning vazni ${jonMass}  boyi ${jonHeight} BMI ${jonBMI}
    `)
} else{
    console.log(`
    Jonning vazni ${jonMass}  boyi ${jonHeight} BMI ${jonBMI} bu Marknikidan katta
    Markning vazni ${markMass} boyi ${markHeight} BMI ${markBMI}
    `)
}
