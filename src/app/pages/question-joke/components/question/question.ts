import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';

interface CaptchaImage {
  id: number;
  url: string;
  isCorrect: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.scss',
})
export class Question {
		verified = output<boolean>();
		error = signal(false);
	
		images: CaptchaImage[] = [
			{ id: 1, url: 'miami.avif', isCorrect: false, selected: false },
			{ id: 2, url: 'modena.jpg', isCorrect: true, selected: false },
			{ id: 3, url: 'niagara.webp', isCorrect: false, selected: false },
			{ id: 4, url: 'washington.jpg', isCorrect: false, selected: false },
			{ id: 5, url: 'new-york.jpg', isCorrect: false, selected: false },
			{ id: 6, url: 'orlando.jpg', isCorrect: false, selected: false }
		];
	
		toggle(img: CaptchaImage) {
			img.selected = !img.selected;
			this.error.set(false);
		}
	
		submit() {
			const correct = this.images.filter(i => i.isCorrect).map(i => i.id).sort();
			const selected = this.images.filter(i => i.selected).map(i => i.id).sort();
			const isValid = JSON.stringify(correct) === JSON.stringify(selected);
	
			if (isValid) {
				this.verified.emit(true);
			} else {
				this.error.set(true);
			}
		}

}
