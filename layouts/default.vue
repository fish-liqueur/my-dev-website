<template>
    <div class="flex flex-col min-h-screen bg-neutral-200">
        <HeaderMain />
        <Breadcrumbs class="self-center"/>
        <main class="grow max-w-6xl px-3 mx-auto">
            <slot />
        </main>
        <FooterMain />
    </div>
</template>
