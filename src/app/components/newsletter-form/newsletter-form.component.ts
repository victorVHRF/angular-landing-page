import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm: FormGroup
  loading = signal(false)

  constructor(private newsletterService: NewsletterService){
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email ,Validators.required])
    })
  }

  onSubmit(){
    const form = this.newsletterForm.value

    this.loading.set(true)
    if(this.newsletterForm.valid){
      this.newsletterService.sendData(form.name, form.email).subscribe({
        next: () => {
          this.newsletterForm.reset()
          this.loading.set(false)

        }
      })
    }
  }
}
