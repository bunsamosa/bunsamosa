<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img src="images/logo.png" class="max-w-sm rounded-lg" alt="BunSamosa" />
		<div class="text-center">
			<h1 class="text-5xl font-bold">Welcome to BunSamosa</h1>
			<p class="text-2xl py-6 font-bold">The home of thoughts, stories and ideas</p>
			<button on:click={() => goto('https://blog.bunsamosa.org/')} class="home-btn">
				<img src="images/blog.png" class="h-8 w-8" alt="Blog" />
				Blog
			</button>
			<button on:click={() => goto('https://github.com/bunsamosa/')} class="home-btn">
				<img src="images/github.png" class="h-8 w-8" alt="Github" />
				Github
			</button>
			<label for="chef-modal" class="home-btn">
				<img src="images/chef.png" class="h-8 w-8" alt="Chefs" />
				Chefs
			</label>
		</div>
	</div>
</div>

<!-- Chef Modal -->
<input type="checkbox" id="chef-modal" class="modal-toggle" />
<label for="chef-modal" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<h3 class="text-lg font-bold">Chefs of BunSamosa</h3>
		<p class="py-4">Coming soon ...</p>
	</label>
</label>

<style>
	.home-btn {
		@apply btn btn-ghost gap-2 mx-2 border-solid border-2 border-indigo-600 font-bold;
	}
</style>
