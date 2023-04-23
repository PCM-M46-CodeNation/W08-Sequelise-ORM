# Week 08 - Sequelise ORM

**Author:** Peter C. Matthews

This repository contains my submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

**Overview:**

Create a Sequelize application that connects to a Clever Cloud database

### Requirements:
 - [x] Create both a Books and an Author model and the following routes/controllers.
 - [x] Use design docs for endpoints/data formatting.
 - [x] Test all routes with Thunder Client
 - [x] Create an association between Books and Author, where:
   - [x] Author has many Book
   - [x] Book belongs to Author
 
 **Book Routes**
 - [x] POST - adds a book to the DB
 - [x] GET - gets all books
 - [x] GET - gets a book by title
 - [x] PUT - dynamically updates a book on title
 - [x] DELETE - deletes a single book by title
 - [x] DELETE - deletes all books
 
 **Author Routes**
 - [x] POST - adds an author to the DB
 - [x] GET - gets a single author by author name and retrieves associated books

### Stretch Goals:
 - [x] Create an association between Books and Author, where:
   - [x] Author has many Book
   - [x] Book belongs to Author

 **Genre Routes**
 - [x] Create two Genre routes given in the design docs.
   - [x] POST - adds an genre to the DB
   - [x] GET - gets a single genre by genre name, and retrieves associated books

**Personal Stretch Goals:**

 - [x] Implement the CQRS pattern, splitting read and write operations.
 - [x] Write Good Path and Bad Path user stories, in Gherkin Syntax.
 - [x] Produce a Database Analysis Report and Roadmap.
 - [ ] Create React front-end to interact with the DB.
 - [ ] Use Tailwind CSS to style the React front-end.

## Implementation

With this project, I wanted to focus on implementing a solution, directly to the given specs for each of the routes. This has still allowed me to use my own initiative so far as project architecture is concerned; but, there are a lot of design choices that I would not personally choose; mainly naming conventions, and response payloads. But, this a part of the discipline that is needed, when working with existing infrastructure.

### React Front-End

TODO: Write React overview.

## Retrospective

It is understood that, for purposes of education, and demonstating the use of specific syllabus requirements, this project is a contrived example of a real-world API and database. That being said, I did want to expand on some areas of the project that took my interest.  

### PUT/PATCH Equivocation

Within the design specs for this project, it specifies that a PUT request should be used for the updating of a book. However, there is an important distinction to be made, between the PUT and PATCH HTTP verbs, that means that means that this API is not being implemented properly, as written. The distinction between the two is thus:

A PUT command should be used to update one or more records within a database, by completely replacing the record, with new information in each field, even if that information is the same as it was previously. The PUT verb denotes that request object **must** contain a fully-formed, valid record that will be used to overwrite the record that is currently within the database. The PUT verb *specifically disallows* partial record updates.

This is as opposed to the PATCH command, that *specifically allows* partial record updates. While a PATCH request body can contain the same fully-formed data as a PUT request, a PUT request **must not** perform partial updates. The PATCH request would usually contain a dictionary of fields, with updated values, for a single record, it can also be used to update values on multiple records, with a filter given within the body. Within this project, the request is made as a dynamic update, for a single field.

### Design Documentation

Part of my aim for this project was to work within the confines of the design documentation. But, I have had to take some liberties, and edit the specs to match closer to the end-product, than the starting point. Because of the educational, linear progression within this project, the design specicifations were written for the intial training environment, rather than for the finished database schema. To this end, I have had to add in the relationships between the tables, and the correct fields within each record, into the specifications for each route. In a production environment, of course, this would require consultation with the client, and with other members of the team who will be using the same design specs to build their parts of the project.

### A Discussion on RESTful API Architecure

Whilst really outside the scope of the project, I wanted to touch upon the structure of the API within this project, and how I would move this forwards into a more production-friendly environment. A working model of the architecture I would want to use can be found within the [Mongoose](https://github.com/PCM-M46-CodeNation/W07-Mongoose-DB) project that was completed within Week 7 of this course. This is where a base Command and Request repositories are created for the generic CRUD operations, and these form the super classes for any route specific repositories that might need to be made, with more specific read and write operations for the given root API route.

This works well, because each route is given the same basic CRUD functionality, and error handling, with no redundant code, and all route specific commands and queries can be separated from the base CRUD functions. This follows the principles and paradigms of FDD/VSA (Feature Driven Design / Vertical Slice Architecture), CQRS (Command Query Responsibility Segragation), and the Repository Pattern. Furthermore, each repository function can then be handled by a Unit of Work middleware layer, to allow for transactions, roll-backs, and message forwarding.