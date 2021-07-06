export const pathNameExport = () => {
    return window.location.pathname;
}

export function changeAnchor() {
    document.write(document.cookie);
    document.getElementById('myAnchor').href=document.cookie;
}
  
export function fiddleHistory() {
      window.history.go(document.location);
      window.history.next = document.location;
}