import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminForm!: FormGroup;  // Reactive form group
  projects: any[] = [];
  certifications: string[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();  // Initialize the form
    this.loadData();  // Load existing data
  }

  // Initialize the reactive form
  initForm() {
    this.adminForm = this.fb.group({
      resume: [null],  // file input
      aboutText: ['', Validators.required],  // about section
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectLink: ['', Validators.required],
      certification: [''],
      contactInfo: ['', Validators.required]
    });
  }

  // Load data from localStorage
  loadData() {
    const aboutText = localStorage.getItem('aboutText') || '';
    const contactInfo = localStorage.getItem('contactInfo') || '';
    this.projects = JSON.parse(localStorage.getItem('projects') || '[]');
    this.certifications = JSON.parse(localStorage.getItem('certifications') || '[]');

    // Update form with saved values
    this.adminForm.patchValue({
      aboutText,
      contactInfo
    });
  }

  // Handle file change for resume upload
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.adminForm.patchValue({
      resume: file
    });
  }

  // Save data to localStorage
  saveData() {
    const formValues = this.adminForm.value;

    // Save about section and contact info
    localStorage.setItem('aboutText', formValues.aboutText);
    localStorage.setItem('contactInfo', formValues.contactInfo);

    // Save project
    const project = {
      title: formValues.projectTitle,
      description: formValues.projectDescription,
      link: formValues.projectLink
    };
    this.projects.push(project);
    localStorage.setItem('projects', JSON.stringify(this.projects));

    // Save certification
    if (formValues.certification) {
      this.certifications.push(formValues.certification);
      localStorage.setItem('certifications', JSON.stringify(this.certifications));
    }

    // Save resume (simulating storing in localStorage)
    if (formValues.resume) {
      const reader = new FileReader();
      reader.readAsDataURL(formValues.resume);
      reader.onload = () => {
        localStorage.setItem('resume', reader.result as string);
      };
    }

    alert('Portfolio updated successfully!');
  }

}
