import React, { FC } from 'react';
import styles from './ModalOverlay.module.css';

interface ModalOverlayProps {}

const ModalOverlay: FC<ModalOverlayProps> = () => (
  <div className={styles.ModalOverlay} data-testid="ModalOverlay">
    ModalOverlay Component
  </div>
);

export default ModalOverlay;
