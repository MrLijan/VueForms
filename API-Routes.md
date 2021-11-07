# API Routes

The following page will deeply describe the API routes of `VueForms`.

<aside>
💡 Be noticed → all api routes will be prefixed with `/api`

</aside>

### Form routes

---

- GET `/forms` - will fetch all the forms from the database,
- GET `/forms/{key}` - will fetch an exact form by its key,
- DELETE `/forms/{key}/delete` - will delete a specific form by its key.
- POST `/forms/create` - create a new form in the database,
    
    

**Form Model**

```json
{
    "name": "Work from home quiz",
    "description": "The following form will cover the...",
    "key": 475891,
    "creator": "Liram jan",
    "fields": [
      {
        "title": "How are you today?",
        "type": "textarea",
        "required": true,
        "answer": null
      },
      {
        "title": "Let me ask you some question",
        "type": "text",
        "required": true,
        "answer": null
      },
      {
        "title": "What is the date today?",
        "type": "date",
        "required": false,
        "answer": ""
      }
    ]
  }
```

### Filled Form routes

---

- GET `/filled` - will fetch all the filled forms from the database,
- GET `/filled/{key}` - will fetch an exact filled form by its key,
- DELETE `/filled/{key}/delete` - will delete a specific filled form by its key.
- POST `/filled/create`- submit new filled form to the DB,
    
    

**Form Model**

```json
{
    "form_key": 937846,
    "form_name": "The name of the form",
    "submit_key": 48938323,
    "filled_by": "Liram Jan",
    "fields": [
      {
        "title": "How are you today?",
        "type": "textarea",
        "required": true,
        "answer": null
      },
      {
        "title": "Let me ask you some question",
        "type": "text",
        "required": true,
        "answer": null
      },
      {
        "title": "What is the date today?",
        "type": "date",
        "required": false,
        "answer": ""
      }
    ]
  }
```