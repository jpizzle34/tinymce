import { AlloyBehaviourRecord } from '../../api/behaviour/Behaviour';
import { SketchBehaviours } from '../../api/component/SketchBehaviours';
import { RawDomSchema, SketchSpec } from '../../api/component/SpecTypes';
import { SingleSketch, SingleSketchSpec, SingleSketchDetail } from '../../api/ui/Sketcher';

export interface DataFieldDetail extends SingleSketchDetail {
  uid: () => string;
  dom: () => RawDomSchema;
  dataBehaviours: () => SketchBehaviours;
  getInitialValue: () => () => any;
}

export interface DataFieldSpec extends SingleSketchSpec {
  uid?: string;
  dom: RawDomSchema;
  getInitialValue: () => any;
  dataBehaviours?: AlloyBehaviourRecord;
}

export interface DataFieldSketcher extends SingleSketch<DataFieldSpec, DataFieldDetail> { };