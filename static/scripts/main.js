function uniatob(str) {
  return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
eval(uniatob('bGV0IHNjb3JlID0gMApsZXQgZGFQYXBpZXpJbnRlcnZhbApsZXQgZGFSUkludGVydmFsCmxldCByb3RhdGlvbiA9IDAKbGV0IGZsaXAgPSBmYWxzZQpsZXQgcGxheWluZzIxMzcgPSBmYWxzZQoKbGV0IHBhcGlleiA9IGAKPGJyPgo8YnI+Cjxicj4KPGltZyBpZD0ianAyIiBzcmM9Ii9zdGF0aWMvanAyLmpwZyIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI0OTQiIGFsdD0ianAyIj4KPGF1ZGlvIGlkPSJiYXJrYSI+CiAgPHNvdXJjZSBzcmM9Ii9zdGF0aWMvanAyLm1wMyIgdHlwZT0iYXVkaW8vbXBlZyI+CiAgVHdvamEgcHJ6ZWdsxIVkYXJrYSBuaWUgd3NwaWVyYSBhdWRpbyA6KAo8L2F1ZGlvPgpgCgpsZXQgYmxvZ29zbGF3aWVuaSA9IGAKPGJyPgo8YnI+Cjxicj4KPGltZyBpZD0ianAyLTIiIHNyYz0iL3N0YXRpYy9qcDItMi5qcGciIHdpZHRoPSI0NTYiIGhlaWdodD0iNTQ4IiBhbHQ9ImpwMiI+CjxhdWRpbyBpZD0iYmxvZ29zbGF3aWVuaSI+CiAgPHNvdXJjZSBzcmM9Ii9zdGF0aWMvanAyLTIubXAzIiB0eXBlPSJhdWRpby9tcGVnIj4KICBUd29qYSBwcnplZ2zEhWRhcmthIG5pZSB3c3BpZXJhIGF1ZGlvIDooCjwvYXVkaW8+CmAKCmxldCByciA9IGAKPGJyPgo8YnI+Cjxicj4KPGltZyBpZD0icnJqcGciIHNyYz0iL3N0YXRpYy9yYS5qcGciIHdpZHRoPSI2NjAiIGhlaWdodD0iMzcxIiBhbHQ9IllvdSBnb3QgUmljayBSb2xsZWQhIj4KPGF1ZGlvIGlkPSJyciI+CiAgPHNvdXJjZSBzcmM9Ii9zdGF0aWMvcnIubXAzIiB0eXBlPSJhdWRpby9tcGVnIj4KICBUd29qYSBwcnplZ2zEhWRhcmthIG5pZSB3c3BpZXJhIGF1ZGlvIDooCjwvYXVkaW8+CmAKCmxldCBkYVNpdGVJbm5lciA9IChkYVNjb3JlKSA9PiB7CiAgcmV0dXJuIGAKICA8aDEgY2xhc3M9ImVmaW5kdXMiIHN0eWxlPSJjb2xvcjogd2hpdGU7Ij4KICAgIE5hZmluZyB0dSBzaSBoaXIuLi4KICA8L2gxPgogIDxpbWcgc3JjPSIvc3RhdGljL2pwMi5wbmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBhbHQ9ImpwMiI+CiAgPHA+CiAgICA8YnV0dG9uIGlkPSJiYXRvbiIgdHlwZT0iYnV0dG9uIj5ObyBrbGlrYWogbm8hIEp1xbwhPC9idXR0b24+CiAgICA8aDEgY2xhc3M9ImVmaW5kdXMiIHN0eWxlPSJjb2xvcjogd2hpdGU7Ij4KICAgICAgxbtlxZsga2xpa27EhcWCIGd1emlvciAKICAgICAgPHNwYW4gaWQ9ImRhU2tvciI+JHtkYVNjb3JlfTwvc3Bhbj4KICAgICAgcmF6eSEKICAgIDwvaDE+CiAgPC9wPgogIGAKfQoKbGV0IGhhbmRsZVBhcGllekF1ZGlvID0gKCkgPT4gewogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gcGFwaWV6CiAgbGV0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhcmthJykKICAgIAogIGlmICghYXVkaW8ucGF1c2VkKSB7CiAgICBpZiAoYXVkaW8uY3VycmVudFRpbWUgPiAzNykgewogICAgICBhdWRpby5jdXJyZW50VGltZSA9IDAKICAgIH0KICB9IGVsc2UgewogICAgYXVkaW8uY3VycmVudFRpbWUgPSAwCiAgICBhdWRpby5wbGF5KCkKICAgIGhhbmRsZVBhcGllekltYWdlKCkKICB9Cn0KCmxldCBoYW5kbGVQYXBpZXpJbWFnZSA9ICgpID0+IHsKICBsZXQganAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pwMicpCiAgbGV0IHNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZScpCiAgbGV0IGFkZGVkRXZlbnQgPSBmYWxzZQogIGpwMi5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBgYAogIHNpdGUuc3R5bGUuZGlzcGxheSA9IGBub25lYAogIHNpdGUuaW5uZXJIVE1MID0gJycKCiAgY2xlYXJJbnRlcnZhbChkYVBhcGllekludGVydmFsKQoKICBkYVBhcGllekludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gewogICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXJrYScpLmN1cnJlbnRUaW1lID4gMzcgJiYgIWFkZGVkRXZlbnQpIHsKICAgICAgYWRkZWRFdmVudCA9IHRydWUKICAgICAganAyLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJwogICAgICBqcDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhcmthJykucGF1c2UoKQogICAgICB9LCBmYWxzZSkKICAgIH0KCiAgICBpZiAocm90YXRpb24gJSAyICE9PSAwKSB7CiAgICAgIHJvdGF0aW9uKysKICAgIH0KCiAgICBpZiAocm90YXRpb24gJSAyMCA9PT0gMCkgewogICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMjEzNykgewogICAgICAgIGZsaXAgPSAhZmxpcAogICAgICB9CiAgICB9CiAgICAKICAgIHJvdGF0aW9uICs9IDIKCiAgICByb3RhdGlvbiAlPSAzNjAKICAgIHRyYW5zZm9ybUltYWdlKCdqcDInLCBgc2NhbGVYKCR7ZmxpcCA/IC0xIDogMX0pIHJvdGF0ZSgke2ZsaXAgPyAzNjAgLSByb3RhdGlvbiA6IHJvdGF0aW9ufWRlZylgKQogICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXJrYScpLnBhdXNlZCkgewogICAgICBjbGVhckludGVydmFsKGRhUGFwaWV6SW50ZXJ2YWwpCiAgICAgIGpwMi5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBgbm9uZWAKICAgICAgc2l0ZS5zdHlsZS5kaXNwbGF5ID0gYGAKICAgICAgcGxheWluZzIxMzcgPSBmYWxzZQogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9ICcnCiAgICAgIHNpdGUuaW5uZXJIVE1MID0gZGFTaXRlSW5uZXIoc2NvcmUpCiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gewogICAgICAgIGJhdG9uSGFuZGxlcigpCiAgICAgIH0sIGZhbHNlKQogICAgfQogIH0sIDIwKQp9CgpsZXQgaGFuZGxlUGFwaWV6QXVkaW8yID0gKCkgPT4gewogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gYmxvZ29zbGF3aWVuaQogIGxldCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9nb3NsYXdpZW5pJykKICAgIAogIGlmICghYXVkaW8ucGF1c2VkKSB7CiAgICBpZiAoYXVkaW8uY3VycmVudFRpbWUgPiAzNykgewogICAgICBhdWRpby5jdXJyZW50VGltZSA9IDAKICAgIH0KICB9IGVsc2UgewogICAgYXVkaW8uY3VycmVudFRpbWUgPSAwCiAgICBhdWRpby5wbGF5KCkKICAgIGhhbmRsZVBhcGllekltYWdlMigpCiAgfQp9CgpsZXQgaGFuZGxlUGFwaWV6SW1hZ2UyID0gKCkgPT4gewogIGxldCBqcDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanAyLTInKQogIGxldCBzaXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUnKQogIGxldCBhZGRlZEV2ZW50ID0gZmFsc2UKICBqcDIucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gYGAKICBzaXRlLnN0eWxlLmRpc3BsYXkgPSBgbm9uZWAKICBzaXRlLmlubmVySFRNTCA9ICcnCgogIGNsZWFySW50ZXJ2YWwoZGFQYXBpZXpJbnRlcnZhbCkKCiAgZGFQYXBpZXpJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHsKICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvZ29zbGF3aWVuaScpLmN1cnJlbnRUaW1lID4gMzcgJiYgIWFkZGVkRXZlbnQpIHsKICAgICAgYWRkZWRFdmVudCA9IHRydWUKICAgICAganAyLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJwogICAgICBqcDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2dvc2xhd2llbmknKS5wYXVzZSgpCiAgICAgIH0sIGZhbHNlKQogICAgfQoKICAgIGlmIChyb3RhdGlvbiAlIDIgIT09IDApIHsKICAgICAgcm90YXRpb24rKwogICAgfQoKICAgIGlmIChyb3RhdGlvbiAlIDIwID09PSAwKSB7CiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4yMTM3KSB7CiAgICAgICAgZmxpcCA9ICFmbGlwCiAgICAgIH0KICAgIH0KICAgIAogICAgcm90YXRpb24gKz0gMgoKICAgIHJvdGF0aW9uICU9IDM2MAogICAgdHJhbnNmb3JtSW1hZ2UoJ2pwMi0yJywgYHNjYWxlWCgke2ZsaXAgPyAtMSA6IDF9KSByb3RhdGUoJHtmbGlwID8gMzYwIC0gcm90YXRpb24gOiByb3RhdGlvbn1kZWcpYCkKICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvZ29zbGF3aWVuaScpLnBhdXNlZCkgewogICAgICBjbGVhckludGVydmFsKGRhUGFwaWV6SW50ZXJ2YWwpCiAgICAgIGpwMi5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBgbm9uZWAKICAgICAgc2l0ZS5zdHlsZS5kaXNwbGF5ID0gYGAKICAgICAgcGxheWluZzIxMzcgPSBmYWxzZQogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9ICcnCiAgICAgIHNpdGUuaW5uZXJIVE1MID0gZGFTaXRlSW5uZXIoc2NvcmUpCiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gewogICAgICAgIGJhdG9uSGFuZGxlcigpCiAgICAgIH0sIGZhbHNlKQogICAgfQogIH0sIDIwKQp9CgpsZXQgaGFuZGxlUlJBdWRpbyA9ICgpID0+IHsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IHJyCiAgbGV0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JyJykKICAgIAogIGlmICghYXVkaW8ucGF1c2VkKSB7CiAgICBpZiAoYXVkaW8uY3VycmVudFRpbWUgPiAzNykgewogICAgICBhdWRpby5jdXJyZW50VGltZSA9IDAKICAgIH0KICB9IGVsc2UgewogICAgYXVkaW8uY3VycmVudFRpbWUgPSAwCiAgICBhdWRpby5wbGF5KCkKICAgIGhhbmRsZVJSSW1hZ2UoKQogIH0KfQoKbGV0IGhhbmRsZVJSSW1hZ2UgPSAoKSA9PiB7CiAgbGV0IHJyanBnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JyanBnJykKICBsZXQgc2l0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlJykKICBsZXQgYWRkZWRFdmVudCA9IGZhbHNlCiAgcnJqcGcucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gYGAKICBzaXRlLnN0eWxlLmRpc3BsYXkgPSBgbm9uZWAKICBzaXRlLmlubmVySFRNTCA9ICcnCgogIGNsZWFySW50ZXJ2YWwoZGFSUkludGVydmFsKQoKICBkYVJSSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7CiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JyJykuY3VycmVudFRpbWUgPiAzNyAmJiAhYWRkZWRFdmVudCkgewogICAgICBhZGRlZEV2ZW50ID0gdHJ1ZQogICAgICBycmpwZy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcicKICAgICAgcnJqcGcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JyJykucGF1c2UoKQogICAgICB9LCBmYWxzZSkKICAgIH0KCiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMjEzNykgewogICAgICBmbGlwID0gIWZsaXAKICAgIH0KCiAgICB0cmFuc2Zvcm1JbWFnZSgncnJqcGcnLCBgc2NhbGVYKCR7ZmxpcCA/IC0xIDogMX0pYCkKICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnInKS5wYXVzZWQpIHsKICAgICAgY2xlYXJJbnRlcnZhbChkYVJSSW50ZXJ2YWwpCiAgICAgIHJyanBnLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGBub25lYAogICAgICBzaXRlLnN0eWxlLmRpc3BsYXkgPSBgYAogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9ICcnCiAgICAgIHNpdGUuaW5uZXJIVE1MID0gZGFTaXRlSW5uZXIoc2NvcmUpCiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gewogICAgICAgIGJhdG9uSGFuZGxlcigpCiAgICAgIH0sIGZhbHNlKQogICAgfQogIH0sIDEwMCkKfQoKbGV0IHRyYW5zZm9ybUltYWdlID0gKGlkLCB0cmFuc2Zvcm0pID0+IHsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtCn0KCmxldCBiYXRvbkhhbmRsZXIgPSAoKSA9PiB7CiAgc2NvcmUrKwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYVNrb3InKS5pbm5lckhUTUwgPSBzY29yZQogIGlmIChzY29yZSA9PT0gNjY2KSB7CiAgICBoYW5kbGVSUkF1ZGlvKCkKICB9CiAgaWYgKHNjb3JlID09PSAyMTM3KSB7CiAgICBoYW5kbGVQYXBpZXpBdWRpbygpCiAgfQogIGlmKHNjb3JlID09PSAyMTMzNykgewogICAgaGFuZGxlUGFwaWV6QXVkaW8yKCkKICB9Cn0KCmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlJykuaW5uZXJIVE1MID0gZGFTaXRlSW5uZXIoc2NvcmUpCgpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICBiYXRvbkhhbmRsZXIoKQp9LCBmYWxzZSkKCmlmICghcGxheWluZzIxMzcpIHsKICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkKCiAgaWYgKGRhdGUuZ2V0SG91cnMoKSA9PT0gMjEgJiYgZGF0ZS5nZXRNaW51dGVzKCkgPT09IDM3KSB7CiAgICBwbGF5aW5nMjEzNyA9IHRydWUKICAgIGNsZWFySW50ZXJ2YWwoZGFSUkludGVydmFsKQogICAgaGFuZGxlUGFwaWV6QXVkaW8oKQogIH0KfQoKc2V0SW50ZXJ2YWwoKCkgPT4gewogIGlmICghcGxheWluZzIxMzcpIHsKICAgIGxldCBkYXRlID0gbmV3IERhdGUoKQogIAogICAgaWYgKGRhdGUuZ2V0SG91cnMoKSA9PT0gMjEgJiYgZGF0ZS5nZXRNaW51dGVzKCkgPT09IDM3KSB7CiAgICAgIHBsYXlpbmcyMTM3ID0gdHJ1ZQogICAgICBjbGVhckludGVydmFsKGRhUlJJbnRlcnZhbCkKICAgICAgaGFuZGxlUGFwaWV6QXVkaW8oKQogICAgfQogIH0KfSwgMTAwMDAp'))