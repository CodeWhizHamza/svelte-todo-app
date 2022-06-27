<script lang="ts">
  let darkMode = JSON.parse(localStorage.getItem('mode'))?.mode || false

  $: {
    localStorage.setItem('mode', JSON.stringify({ mode: darkMode }))
    if (darkMode) {
      document.documentElement.style.setProperty('--bg', '#252525')
      document.documentElement.style.setProperty('--bg-main', '#1f1f1f')
      document.documentElement.style.setProperty('--border-color', '#1a1a1a')
      document.documentElement.style.setProperty('--text', '#fafafa')
      document.documentElement.style.setProperty('--bg-input', '#444')
      document.documentElement.style.setProperty('--placeholder-color', '#eee')
    } else {
      document.documentElement.style.setProperty('--bg', '#f1f1f1')
      document.documentElement.style.setProperty('--bg-main', '#fff')
      document.documentElement.style.setProperty('--border-color', 'silver')
      document.documentElement.style.setProperty('--text', '#333')
      document.documentElement.style.setProperty('--bg-input', '#f0f0f0')
      document.documentElement.style.setProperty('--placeholder-color', 'gray')
    }
  }
</script>

<div class="container">
  <input type="checkbox" id="mode" bind:checked={darkMode} />
  <label for="mode" />
</div>

<style lang="scss">
  .container {
    width: 40px;
    height: 20px;
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      position: absolute;
      top: -999px;
      right: -9999px;
      visibility: hidden;
    }
    label {
      width: 40px;
      height: 20px;
      border-radius: 999px;
      background: #333;
      position: relative;
      cursor: pointer;
      transition: all 100ms ease-in;

      &::after {
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 999px;
        background-color: #f0f0f0;
        position: absolute;
        top: 50%;
        left: 3px;
        transform: translateY(-50%);
        transition: all 100ms ease-in;
      }
    }
    input:checked + label {
      background: #f0f0f0;
      &::after {
        background-color: #333;
        transform: translateY(-50%) translateX(18px);
      }
    }
  }
</style>
