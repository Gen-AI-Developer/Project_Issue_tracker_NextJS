import React from 'react'

const HowToReport = () => {
    return (
        <div className='flex max-w-max m-4 p-3'>
            <p>

                <strong>Steps to Report an Issue on DevSquads</strong>
                <h2>Title of Issue:</h2>Provide a concise and descriptive title for your issue. This helps us quickly understand the nature of the problem.

                Example: "Null Pointer Exception in User Authentication Module"

                Description of Issue: Give a detailed explanation of the issue you're facing. Include information about what you're trying to achieve, the expected outcome, and the actual outcome. Mention any error messages or unusual behavior observed.

                Example: "While trying to authenticate users, I'm encountering a Null Pointer Exception in the User Authentication Module. This occurs when a new user attempts to log in for the first time. I expect the user to be authenticated and redirected to the dashboard, but instead, the application crashes."

                Optional Attachments:

                Screenshot: If possible, attach a screenshot that illustrates the issue. This can provide valuable context and help our developers understand the problem more quickly.
                Container Image: If your application runs in a container, provide the container image. This allows our developers to replicate your environment and diagnose the issue accurately.
                GitHub Repo Link: Share the link to your GitHub repository if applicable. This gives our developers direct access to your codebase for a thorough analysis and quicker resolution.
                Example Submission:
                Title of Issue: "Null Pointer Exception in User Authentication Module"

                Description of Issue: "While trying to authenticate users, I'm encountering a Null Pointer Exception in the User Authentication Module. This occurs when a new user attempts to log in for the first time. I expect the user to be authenticated and redirected to the dashboard, but instead, the application crashes."

                Attachments:

                Screenshot: [screenshot.png]
                Container Image: myapp/user-auth:latest
                GitHub Repo Link: https://github.com/username/repo
                By following these steps and providing the necessary information, you can help our developers diagnose and resolve your coding issues more efficiently. Thank you for choosing DevSquads, where we turn your development challenges into seamless solutions!

            </p>
        </div>
    )
}

export default HowToReport