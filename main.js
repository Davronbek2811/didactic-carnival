const select1 = document.querySelector('#select_map_1');
const select2 = document.querySelector('#select_map_2');
const btn = document.getElementById('convertBtn');
const inp = document.getElementById('input');
const divContend = document.getElementById('div_contend')

let a = false;

fetch('https://www.floatrates.com/daily/usd.json')
    .then((res) => res.json())
    .then((data) => Object.values(data))
    .then((arr) => {
        arr.map((e) => {
            const option = document.createElement('option');
            option.textContent = e.code;
            option.value = e.rate;
            option.classList.add('option_2');
            select2.appendChild(option);
        });
        a = true;
    });

btn.addEventListener('click', () => {
    const tanlanganOption = select2.options[select2.selectedIndex];
    divContend.innerHTML = (Math.floor(inp.value * tanlanganOption.value) + tanlanganOption.textContent)
})
