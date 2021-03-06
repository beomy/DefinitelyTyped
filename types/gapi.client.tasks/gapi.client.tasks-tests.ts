/* This is stub file for gapi.client.tasks definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('tasks', 'v1', () => {
        /** now we can use gapi.client.tasks */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Create, edit, organize, and delete all your tasks */
            'https://www.googleapis.com/auth/tasks',
            /** View your tasks */
            'https://www.googleapis.com/auth/tasks.readonly',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /** Deletes the authenticated user's specified task list. */
        await gapi.client.tasks.tasklists.delete({
            tasklist: "Test string",
        });
        /** Returns the authenticated user's specified task list. */
        await gapi.client.tasks.tasklists.get({
            tasklist: "Test string",
        });
        /** Creates a new task list and adds it to the authenticated user's task lists. */
        await gapi.client.tasks.tasklists.insert({
        }, {
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            selfLink: "Test string",
            title: "Test string",
            updated: "Test string",
        });
        /** Returns all the authenticated user's task lists. */
        await gapi.client.tasks.tasklists.list({
            maxResults: "Test string",
            pageToken: "Test string",
        });
        /** Updates the authenticated user's specified task list. This method supports patch semantics. */
        await gapi.client.tasks.tasklists.patch({
            tasklist: "Test string",
        }, {
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            selfLink: "Test string",
            title: "Test string",
            updated: "Test string",
        });
        /** Updates the authenticated user's specified task list. */
        await gapi.client.tasks.tasklists.update({
            tasklist: "Test string",
        }, {
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            selfLink: "Test string",
            title: "Test string",
            updated: "Test string",
        });
        /**
         * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when
         * retrieving all tasks for a task list.
         */
        await gapi.client.tasks.tasks.clear({
            tasklist: "Test string",
        });
        /** Deletes the specified task from the task list. */
        await gapi.client.tasks.tasks.delete({
            task: "Test string",
            tasklist: "Test string",
        });
        /** Returns the specified task. */
        await gapi.client.tasks.tasks.get({
            task: "Test string",
            tasklist: "Test string",
        });
        /** Creates a new task on the specified task list. */
        await gapi.client.tasks.tasks.insert({
            parent: "Test string",
            previous: "Test string",
            tasklist: "Test string",
        }, {
            completed: "Test string",
            deleted: true,
            due: "Test string",
            etag: "Test string",
            hidden: true,
            id: "Test string",
            kind: "Test string",
            links: [
                {
                    description: "Test string",
                    link: "Test string",
                    type: "Test string",
                }            ],
            notes: "Test string",
            parent: "Test string",
            position: "Test string",
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            updated: "Test string",
        });
        /** Returns all tasks in the specified task list. */
        await gapi.client.tasks.tasks.list({
            completedMax: "Test string",
            completedMin: "Test string",
            dueMax: "Test string",
            dueMin: "Test string",
            maxResults: "Test string",
            pageToken: "Test string",
            showCompleted: true,
            showDeleted: true,
            showHidden: true,
            tasklist: "Test string",
            updatedMin: "Test string",
        });
        /**
         * Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a
         * different position among its sibling tasks.
         */
        await gapi.client.tasks.tasks.move({
            parent: "Test string",
            previous: "Test string",
            task: "Test string",
            tasklist: "Test string",
        });
        /** Updates the specified task. This method supports patch semantics. */
        await gapi.client.tasks.tasks.patch({
            task: "Test string",
            tasklist: "Test string",
        }, {
            completed: "Test string",
            deleted: true,
            due: "Test string",
            etag: "Test string",
            hidden: true,
            id: "Test string",
            kind: "Test string",
            links: [
                {
                    description: "Test string",
                    link: "Test string",
                    type: "Test string",
                }            ],
            notes: "Test string",
            parent: "Test string",
            position: "Test string",
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            updated: "Test string",
        });
        /** Updates the specified task. */
        await gapi.client.tasks.tasks.update({
            task: "Test string",
            tasklist: "Test string",
        }, {
            completed: "Test string",
            deleted: true,
            due: "Test string",
            etag: "Test string",
            hidden: true,
            id: "Test string",
            kind: "Test string",
            links: [
                {
                    description: "Test string",
                    link: "Test string",
                    type: "Test string",
                }            ],
            notes: "Test string",
            parent: "Test string",
            position: "Test string",
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            updated: "Test string",
        });
    }
});
