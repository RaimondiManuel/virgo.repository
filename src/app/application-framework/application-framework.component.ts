import { Component, OnInit } from '@angular/core';
import { ApplicationIdStrings } from '../application-id-strings';
import { ApplicationClassStrings } from '../application-class-strings';
import { ApplicationNameStrings } from '../application-name-strings';

@Component( {
  selector: 'V-application-framework',
  templateUrl: './application-framework.component.html',
  styleUrls: ['./application-framework.component.scss']
})
export class ApplicationFrameworkComponent implements OnInit
{
  // #region View model private fields.

  private _codeModeCanvas: HTMLElement = document.getElementById( ApplicationIdStrings.VFrameworkCodemodeCanvasId );
  private _designModeCanvas: HTMLElement = document.getElementById( ApplicationIdStrings.VFrameworkDesignmodeCanvasId );
  private _codeModeLineCounter: HTMLElement = document.getElementById( ApplicationIdStrings.VFrameworkLineCounterId );
  private _codeModeSelectionBuffer: HTMLElement = document.getElementById( ApplicationIdStrings.VFrameworkSelectionBufferId );

  // #endregion View model private fields.

  // #region View model public fields.

  public VFrameworkCanvasContainerId: string = ApplicationIdStrings.VFrameworkCanvasContainerId;
  public VFrameworkCodemodeCanvasId: string = ApplicationIdStrings.VFrameworkCodemodeCanvasId;
  public VFrameworkDesignmodeCanvasId: string = ApplicationIdStrings.VFrameworkDesignmodeCanvasId;
  public VFrameworkLineCounterId: string = ApplicationIdStrings.VFrameworkLineCounterId;
  public VFrameworkSelectionBufferId: string = ApplicationIdStrings.VFrameworkSelectionBufferId;

  public VFrameworkCanvasContainerName: string = ApplicationNameStrings.VFrameworkCanvasContainerName;
  public VFrameworkCodemodeCanvasName: string = ApplicationNameStrings.VFrameworkCodemodeCanvasName;
  public VFrameworkDesignmodeCanvasName: string = ApplicationNameStrings.VFrameworkDesignmodeCanvasName;
  public VFrameworkLineCounterName: string = ApplicationNameStrings.VFrameworkLineCounterName;
  public VFrameworkSelectionBufferName: string = ApplicationNameStrings.VFrameworkSelectionBufferName;

  public VFrameWorkClass: string = ApplicationClassStrings.VFrameWorkClass;


  // #endregion View model public fields.

  // #region View model constructors.

  constructor() { }

  // #endregion View model constructors.

  // #region View model event handlers.

  // #region Initialization code mode frame event handlers.

  ngOnInit() { }
  protected OnInitCodeModeFameStarted() { }
  protected OnInitCodeModeFameRunning() { }
  protected OnInitCodeModeFameEnded() { }

  // #endregion Initialization code mode frame event handlers.

  // #region Update code mode frame event handlers.

  protected OnUpdateCodeModeFameStarted() { }
  protected OnUpdateCodeModeFameRunning() { }
  protected OnUpdateCodeModeFameEnded() { }

  // #endregion  Update code mode frame event handlers.

  // #region Selection code mode frame event handlers.

  protected OnSelectionCodeModeFameStarted() { }
  protected OnSelectionCodeModeFameRunning() { }
  protected OnSelectionCodeModeFameEnded() { }

  // #endregion  Selection code mode frame event handlers.

  // #endregion View model event handlers.

  // #region View model helper methods.

  // #endregion View model helper methods.

  // #region View model Getters and Setters.

  public GetCodeModeCanvas(): HTMLElement { return document.getElementById( ApplicationIdStrings.VFrameworkCodemodeCanvasId ) };
  public GetDesignModeCanvas(): HTMLElement { return document.getElementById( ApplicationIdStrings.VFrameworkDesignmodeCanvasId ) };
  public GetCodeModeLineCounter(): HTMLElement { return document.getElementById( ApplicationIdStrings.VFrameworkLineCounterId ) };
  public GetCodeModeSelectionBuffer(): HTMLElement { return document.getElementById( ApplicationIdStrings.VFrameworkSelectionBufferId ) };

  // #endregion View model Getters and Setters.
}
