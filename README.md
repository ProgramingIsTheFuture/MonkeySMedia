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
		<li><h3>list-posts/</h3> <span>Get a list of all posts from people I follow</span></li>
		<li><h3>get-user-posts/</h3> <span>Get a list of all posts a unique user</span></li>
		<li><h3>create-posts/</h3> <span>Create a new Post</span></li>
		<li><h3>delete-post/</h3> <span>Delete a post if i'm the owner</span></li>
		<li><h3>like-unlike-posts/</h3> <span>Like or Remove the like from a unique post</span></li>
		<li><h3>check-like-post/</h3> <span>check if i have my like in a certain post</span></li>
		<li><h3>search-user-post/</h3> <span>send the request with ?search=<value> to look for a post</span></li>
	</ul>
	<ul>
		<h2>users/</h2>
		<li><h3>create/</h3> <span>Create a user with all fields</span></li>
		<li><h3>get-user/</h3> <span>returns the username from the guy that send the token<span></li>
		<li><h3>login/</h3> <span>Login a user</span></li>
		<li><h3>logout/</h3> <span>logout the user</span></li>
	</ul>
	<ul>
		<h2>profile/</h2>
		<li><h3>get-profile/</h3> <span>get the users profile with the username</span></li>
		<li><h3>search-profile/</h3> <span>send the request with ?search=<value> to look for a profile</span></li>
		<li><h3>follow-unfollow/</h3> <span>To follow or unfollow a user</span></li>
		<li><h3>check-follow-profile/</h3> <span>Checks if the user is already been followed</span></li>
		<li><h3>edit-my-profile/</h3> <span>Edit your own profile</span></li>
	</ul>
	<ul>
		<h2>chat/</h2>
		<li><h3>all-messages//</h3> <span>get all the messages</span></li>
		<li><h3>list-users/</h3> <span>List the users that i'm following or that sent me a message</span></li>
		<li><h3>list-notifications/</h3> <span>List all my notifications</span></li>
	</ul>
</ul>
