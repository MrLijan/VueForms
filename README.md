# VueForms

## Mission Description


Welcome to the Form Builder application exam. This app is a simple web
application that allows the user to create a custom form to which anyone can
submit answers (Like *Google Forms*).

To complete the task, the following stack should be implemented:

1. Backend - PHP Laravel,
2. Database - MongoDB,
3. Front-end framework (React, Vue, Svelte, etc...).

### Guidelines

- You can use any general-purpose libraries that don't specifically solve the form creation case.
- You need to commit all of your actions while you work on this project.
- You will be required to add additional functionality after you finish the project when choosing libraries, keep that in mind.

## Mission Details


The following pages should be created:

1. *Forms List,*
2. *Form Builder,*
3. *Form Submit,*

### 1. Form List page

---

This page will include a list of all forms and also a link to create a new form. The list of forms is a table with the following columns:

- Form ID,
- Form Name,
- Number of submissions,
- Submit page redirection.

### 2. Form Builder page

---

On this page, you'll implement a wizard to create a form. This wizard will contain a container where you are able to add:

- Field label,
- Input name,
- Input type,
- Submit button in order to save this form.
    
    

The field label and input name are free text, and the input type is of the following input types: `text, date, email, Tel,` and `number`. When you are done adding fields, you should enter the form name and hit the submit button in order to add the form to your forms list.

At the end of the creation process, the user should redirect to the `/forms list`
page.

### 3. Form Submit page

---

On this page, you'll display a specific form by its `id`. This form must include all the relevant fields and a submit button. On submit, all data will be saved.

At the end of the submission process, the user should redirect to the forms
list page.

### Children Pages:

[API Routes](API-Routes.md)
