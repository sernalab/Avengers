<template>
    <div class="menu navbar">
        <div class="menu__logo">
            <router-link to="/">
                <img src="@/assets/marvel-logo.svg" alt="Marvel">
            </router-link>
        </div>
        <Search />
        <router-link to="/card-game" class="card-game">Avengers Card Game</router-link>
    </div>
</template>

<script>
import Search from '@/components/Menu/Search'

export default {
    name: 'Menu',
    components: {
        Search
    }
}
</script>
