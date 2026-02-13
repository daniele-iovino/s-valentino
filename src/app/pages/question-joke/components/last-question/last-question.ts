import { Component, output, signal } from '@angular/core';

@Component({
	selector: 'app-last-question',
	imports: [],
	templateUrl: './last-question.html',
	styleUrl: './last-question.css',
})
export class LastQuestion {
	noScale = signal(1);
	yesScale = signal(1);
	noClick = output<void>();

	onYesClick() {
		this.noScale.update(v => v * 2);
		this.yesScale.update(v => v * 0.5);

		// opzionale: quando diventa troppo piccolo, sparisce
		if (this.yesScale() < 0.15) {
			this.yesScale.set(0);
		}
	}

	onNoClick() {
		this.noClick.emit();
	}
}
