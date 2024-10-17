# Quiz Application

This is a full-stack Quiz Application where users can participate in quizzes, submit their answers, and view their score. It features a React frontend and an Express.js backend with MySQL as the database.

## Features
- Users can input their name to start the quiz.
- Quizzes are dynamically fetched from the backend.
- Users can select answers and submit the quiz.
- The application calculates the user's score based on the correct answers.
- Results are stored in the database with the user's name and score.
- Users can view their scores after submission.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Express.js
- **Database:** MySQL
- **API:** Axios (for fetching data and submitting answers)

## Getting Started

### Prerequisites
To run this project locally, ensure you have the following installed:
- Node.js
- MySQL

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/quiz-app.git
    ```

2. **Backend Setup:**

    - Navigate to the `backend` directory:
      ```bash
      cd online-quiz-app-backend
      ```

    - Install dependencies:
      ```bash
      npm install
      ```

    - Create a `.env` file and configure your database connection:
      ```
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=yourpassword
      DB_NAME=quiz_app
      ```

    - Create the necessary tables in your MySQL database. Here’s a basic table schema:

      ```sql
      CREATE TABLE quizzes (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255),
          questions JSON
      );

      CREATE TABLE results (
          id INT AUTO_INCREMENT PRIMARY KEY,
          quiz_id INT,
          user_name VARCHAR(255),
          score INT,
          FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
      );
      ```

    - Run the server:
      ```bash
      npm start
      ```

3. **Frontend Setup:**

    - Navigate to the `frontend` directory:
      ```bash
      cd online-quiz-app-frontend
      ```

    - Install dependencies:
      ```bash
      npm install
      ```

    - Run the development server:
      ```bash
      npm start
      ```

    The frontend will be available at `http://localhost:3000`.

## Usage

1. **Starting a Quiz:** Enter your name to start the quiz.
2. **Answering Questions:** Select your answers and submit the quiz.
3. **Score Display:** After submission, your score will be displayed.
4. **Leaderboard:** Click on the "View Leaderboard" link to see the top scores (implement leaderboard feature if needed).
![image](https://github.com/user-attachments/assets/16b611e9-e7a9-470c-b4e1-8365a9686e66)
![image](https://github.com/user-attachments/assets/a782938d-748c-42fe-9b74-83e2e53c0fb7)
![image](https://github.com/user-attachments/assets/519d71a5-5c9c-4c8d-8fce-b9a31ab35369)
![image](https://github.com/user-attachments/assets/e3325dd5-8a02-4331-a353-14b5e87e1a59)

## API Endpoints

- **GET /quizzes**: Fetch all quizzes.
- **GET /quizzes/:quizId**: Fetch a single quiz by ID.
- **POST /quizzes/:quizId/submit**: Submit quiz answers and calculate the score.

## Example Quiz Data

Here is an example quiz data that can be inserted into your database:

```sql
INSERT INTO quizzes (title, questions) VALUES (
    'General Knowledge',
    '[{"question": "What is the capital of France?", "options": ["Berlin", "Madrid", "Paris", "Lisbon"], "answer": "Paris"},
      {"question": "Which planet is known as the Red Planet?", "options": ["Earth", "Mars", "Jupiter", "Saturn"], "answer": "Mars"},
      {"question": "What is the largest ocean on Earth?", "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], "answer": "Pacific Ocean"}]'
);
```

## Contributing

If you want to contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
