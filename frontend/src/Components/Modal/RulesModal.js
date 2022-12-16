

const RulesModal = () => {
    document.querySelector('footer').innerHTML = `<div id="modal" class="modal" tabindex="-1" role="dialog" style="display:none;">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" id="close-modal" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
  document.getElementById('myModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
  });
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });
};

export default RulesModal;