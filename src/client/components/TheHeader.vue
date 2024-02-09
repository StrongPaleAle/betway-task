
import AppIcon from './AppIcon.vue';
<template>
    <header class="main-header">
        <div class="main-header__inner">
            <a href="/" class="main-header__logo">
                <img src="/assets/images/JC_Logo_Col_Dark_300.png" alt="JackpotCity Casino" />
            </a>
            <nav class="main-header__nav">
                <AppButton type="link" href="#">
                    Register
                </AppButton>
                <AppIcon type="button" label="User">
                    <img src="/assets/images/user-circle.png" alt="User Icon" />
                </AppIcon>
                
            </nav>
        </div>
    </header>
</template>
<style lang="scss">
    .main-header {
        --inner-padding: 0.6rem 0.8rem;
        --logo-height: 30px;
        --gap: 1.25rem;
        background-color: rgba(0, 0, 0, 0.95);
        position: absolute;
        inset: 0 0 auto;
        z-index: 99;
        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--inner-padding);
            max-width: 1500px;
            margin: 0 auto;
            
        }
        &__logo {
            img {
                height: var(--logo-height);
                
            }
        }
        &__nav {
            display: flex;
            gap: var(--gap);
            align-items: center;
        }
        @media (min-width: 640px) {
            --inner-padding: 0.8rem 1.25rem;
            --logo-height: 40px;
            --gap: 2.25rem;
        }
        @media (min-height: 1000px) {
            --inner-padding: 1.125rem 1.8rem;
            --logo-height: 60px;
        }
    }
</style>