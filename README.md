# javascript-training

The Twelve-Factor methodology focuses on 12 best practices for application development and they are :

1. A twelve factor must have a single codebase tracked in a version control system , such as git . 

2. The app must declare all of its dependencies (using tools like) package.json for Node.js , etc .

3. Configuration such as environment variables or configuration files , should be stored outside of the codebase (often in environment variables). This makes it easier to change the environment without changing the code . 

4. Treat backing services like databases , caches , etc., as attached recources . These services can be swapped out without modifying the app's code .

5. The app's lifecycle is split into three stages :
-Build (Compiling or preparing the app)
-Release (deploying the built app and attaching environment-specific settings)
-Run (the app running in production)

6. The app is executed in one or more stateless processes .  These processes are independent and share nothing , meaning they don't rely on local storage or memory (everything should be stored in shared external database).

7. The app exports HTTP services via port binding . This means the app runs independently and can be accessed over a specified port .

8. The app is designed to scale out  by running multiple processes (workers, web dynos, etc.), making it scalable horizontally .

9. Processes are designed to be quickly recover from crashes or be restarted without any major issues .

10. The development ,staging ,and produvtion environments should be as similar as possible . This reduces bugs and issues that rise from discrepancies between environments .

11. Logs should be treated as event streams , meaning that aa=ll logs are written to stdout and stderr . This enables them to be aggregated , filtered ,and stored independently .

12. One-off admin tasks (such as database migrations or script runs) should run as one-off processes in the same environment as the app .

and hence this Twelve-Factor App Methoddology helps in the : 
 *Scalability 
 *Portability 
 *Reliability 
 *Ease of deployment and maintainence 



 -------------------------------------------------------------------------------------------------------


 Atomic Design is alaso a methodology for crafting scalable , consistent and systematic design systems . It breaks user interfaces(UI's) into five hierarchial levels bases on principles of chemistry : Atoms , Molecules , Organisms , Templates and Pages .

 The 5 Stages of Atomic Design : 

 1.  Atoms
Definition: The basic building blocks of an interface.

Role: Serve as foundational UI elements. They don’t function alone but form the base for more complex components.

Examples:

- HTML tags: <button>, <input>, <label>

- Text styles, icons, color swatches

- A single image or heading

2. Molecules
Definition: Groups of atoms that function together as a single UI unit.

Role: Have some basic functionality and purpose. More complex than atoms but still relatively simple.

Examples:

- Search form (input + button)

- Labeled input field

- Product price and title grouped together

3.  Organisms
Definition: Relatively complex UI components composed of groups of molecules (and atoms).

Role: Represent distinct sections of a UI.

Examples:

- Navigation bar (logo + menu + user avatar)

- Product card (image, description, price, button)

- Footer with columns of links and social icons

4.  Templates
Definition: Page-level layouts that include groups of organisms arranged to form structure.

Role: Define the layout, without real content. Focuses on structure and content hierarchy.

Examples:

- Blog layout with header, sidebar, and article list

- E-commerce product page with product grid and filters

5.  Pages
Definition: Final rendered UI that applies real content to a template.

Role: Allows testing of components in context. Pages are what users actually see.

Examples:

- Product page showing specific products and prices

- User dashboard showing real data


-------------------------------------------------------------------------------------------------------


