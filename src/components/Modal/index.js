import React,{ Component } from 'react';
import * as PropTypes from 'prop-types';
import './index.css';

const Modal = (props) => {
  const { children, title = 'test', cancelText = '取消', confirmText = '确认', visible = false, cancel, confirm } = props;
  return (
    <div>
      {
        visible &&
        <div>
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-title">{title}</div>
              <div className="modal-content">{children}</div>
              <div className="modal-operator">
                <button className="modal-operator-cancel" onClick={cancel}>{cancelText}</button>
                <button className="modal-operator-confirm" onClick={confirm}>{confirmText}</button>
              </div>
            </div>
          </div>
          <div className="mask"></div>
        </div>
      }
    </div>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  cancel: PropTypes.func,
  confirm: PropTypes.func
};

module.exports = Modal;