# Summernote Sticky Toolbar

This is a simple plugin for [Summernote](https://summernote.org/) that makes the toolbar sticky.

https://user-images.githubusercontent.com/4955440/193377819-2d6e825f-9511-41ff-96ff-36b9958761cd.mp4

## Installation

### Classic

Include the plugin script after including Summernote:

```html
<!-- include jquery, bootstrap, summernote here -->

<script type="text/javascript" src="summernote-sticky-toolbar.js"></script>
```

### Via npm

Install sticky toolbar plugin trough npm:

```bash
npm install summernote-sticky-toolbar
```

## Configuration

Enable and configure the sticky toolbar plugin.

```javascript
$('.summernote').summernote({
    stickyToolbar: {
        enabled: true, // enable/disable sticky toolbar
        offset: 0, //y offset from top
        zIndex: 9999 //z-index of the toolbar
    }
});
```

Please do not forget to star the repository if you like it!
