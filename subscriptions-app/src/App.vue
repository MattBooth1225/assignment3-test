<template>
  <div class="app">
    <header>
        <nav class="navbar justify-content-between flex-nowrap flex-row">
          <div class="container">
            <h1><span>Subscriptions</span>App</h1>
              <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                  <router-link class="nav-link pr-3" to="/create">Add Subscription</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link pr-3" to="/">View Subscriptions</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/about">About Page</router-link>
                </li>
              </ul>
          </div>
        </nav>
    </header>
  <main>
    <router-view class="modify"></router-view>
  </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', san-serif;

  &::selection {
    background: transparentize(#42B883, 0.5);
  }
}

body {
  background-color: #35495B;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #FFF;
    font-size: 28px;

    span {
      color: #42B883;
    }
  }
}

h3 {
  padding-top: 10px;
}

.modify {
  padding: 10px;
}

</style>
