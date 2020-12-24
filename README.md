# MonkeySMedia
### My Personal SocialMedia

###### In this social network we will be able to make post so that our friends can see.

###### We can Post images, text. we can like posts and comment it. Follow our freinds, and be followed by them.

###### Each user will have their own profiles and will be able to change it how ever he want.


<ul>
	<h1>Endpoints</h1>
	<h2>localhost:8000</h2>
	<li>/auth <span>Get the JWT Token</span></li>
	<h2>/api/</h2>
	<ul>
		<h2>posts/</h2>
		<li>list-posts/ <span>Get a list of all posts from people I follow</span></li>
		<li>get-user-posts/ <span>Get a list of all posts a unique user</span></li>
		<li>create-posts/ <span>Create a new Post</span></li>
		<li>delete-post/ <span>Delete a post if i'm the owner</span></li>
		<li>like-unlike-posts/ <span>Like or Remove the like from a unique post</span></li>
		<li>check-like-post/ <span>check if i have my like in a certain post</span></li>
		<li>search-user-post/ <span>send the request with ?search=<value> to look for a post</span></li>
	</ul>
	<ul>
		<h2>users/</h2>
		<li>create/ <span>Create a user with all fields</span></li>
		<li>get-user/ <span>returns the username from the guy that send the token<span></li>
		<li>login/ <span>Login a user</span></li>
		<li>logout/ <span>logout the user</span></li>
	</ul>
	<ul>
		<h2>profile/</h2>
		<li>get-profile/ <span>get the users profile with the username</span></li>
		<li>search-profile/ <span>send the request with ?search=<value> to look for a profile</span></li>
		<li>follow-unfollow/ <span>To follow or unfollow a user</span></li>
		<li>check-follow-profile/ <span>Checks if the user is already been followed</span></li>
		<li>edit-my-profile/ <span>Edit your own profile</span></li>
	</ul>
</ul>
