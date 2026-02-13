import { Component, effect, signal, viewChild } from '@angular/core';
import { FakeCaptcha } from './components/fake-captcha/fake-captcha';
import { OkPopup } from './components/ok-popup/ok-popup';
import { Hearts } from './components/hearts/hearts';
import { Question } from './components/question/question';
import { FinalYes } from './components/final-yes/final-yes';
import { LastQuestion } from "./components/last-question/last-question";

@Component({
  selector: 'app-question-joke',
  imports: [FakeCaptcha, OkPopup, Hearts, Question, FinalYes, LastQuestion, LastQuestion],
  templateUrl: './question-joke.html',
  styleUrl: './question-joke.scss',
})
export class QuestionJoke {

	// gestione captcha
  captcha1 = signal(false);
  captcha2 = signal(false);

	// gestione popup question
	showPopup = signal(false);

	// gestione Hearts
	showHearts = signal(false);
  hearts = viewChild(Hearts);
	heartsEffect = effect(() => {
		const hearts = this.hearts();
		if (hearts) { hearts.generateHearts(); }
	});

	// gestione final YES
	finalNo = signal(false);
	lastQuestion = signal(false);

  captcha1Verified(verified:boolean):void {
    this.captcha1.set(verified);
  }

	captcha2Verified(verified:boolean):void {
    this.captcha2.set(verified);
  }

	questionNoClicked() {
		this.showPopup.set(true);
	}

	closePopup() {
		this.showPopup.set(false);
		this.showHearts.set(true);
		this.finalNo.set(true);
		setTimeout(() => {
			this.showHearts.set(false);
		}, 4000);
	}

}