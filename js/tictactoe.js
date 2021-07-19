const board = document.getElementById('thisBoard');
board.childNodes.forEach((Element) => {
	Element.addEventListener('click', () => {
		if (!Element.textContent) {
			Element.textContent = '✔';
			let ramdowBool;
			let availablePositions = 0;
			for (let i = 0; i < 9; i++) {
				if (!board.children[i].textContent) {
					availablePositions++;
				}
			}
			console.log(availablePositions);
			do {
				let numRamdom = Math.floor(Math.random() * (8 - 0 + 1) + 0);
				if (
					!(
						board.children[numRamdom].textContent == '✔' ||
						board.children[numRamdom].textContent == '✖'
					)
				) {
					board.children[numRamdom].textContent = '✖';
					console.log(numRamdom);
					ramdowBool = true;
				} else {
					ramdowBool = false;
				}
				if (availablePositions < 2) {
					console.log('empate');
					ramdowBool = true;
				}
			} while (!ramdowBool);
		} else {
			console.log('no se  envio el dato, casillero lleno');
		}
	});
});
