<template>
    <div>
      <h1>{{ $t('welcome') }}</h1>
      <h1>{{ $t('about') }}</h1>
      <h1>{{ $t('contact') }}</h1>
      <form>
        <label for="locale-select">Select Language: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="chi">Chinese</option>
          <option value="hi">Hindi</option>
        </select>
      </form>
    </div>
</template>